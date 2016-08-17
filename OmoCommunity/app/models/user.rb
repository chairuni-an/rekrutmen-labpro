class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :topics,	dependent: :destroy
  has_many :posts,	dependent: :destroy

  #NOTIFPOST
  has_many :notifposts, dependent: :destroy
  has_many :notifpostlikes, dependent: :destroy
  
  #DEVISE
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :authentication_keys => [:login]

  #OMNIAUTH
  devise :omniauthable, :omniauth_providers => [:facebook, :google_oauth2]
  
  #FACEBOOK
  def self.from_omni(auth)
    User.where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
       user.email =auth.info.email
       user.password=Devise.friendly_token[0,20]
       user.image= auth.info.image
       if auth.info.email.split("@").last == "std.stei.itb.ac.id"
         user.nim=auth.info.email.split("@").first
       else
         user.nim=10_000_000 + Random.rand(100_000_000 - 10_000_000)
       end
       user.username= "#{auth.info.email.split("@").first}-#{ SecureRandom.hex(10)}"
    end
  end
  def self.new_with_session(params, session)
    super.tap do |user|
      if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
        user.username = "#{data["email"].split("@").first}-#{ SecureRandom.hex(10)}"
        user.nim=10_000_000 + Random.rand(100_000_000 - 10_000_000)
      else 
        if data = session["devise.google_data"] && session["devise.google_data"]["extra"]["raw_info"]
          user.username = "#{data["email"].split("@").first}-#{ SecureRandom.hex(10)}"
          user.nim=10_000_000 + Random.rand(100_000_000 - 10_000_000)
        end
      end
    end
  end


  #USERNAME
  attr_accessor :login
  validate :validate_username
  validates :username, presence: true, length: { minimum: 4 } 
  validates_uniqueness_of :nim, :username

  def validate_username
  	if User.where(email: username).exists?
  		errors.add(:username, :invalid)
  	end
  end
  def self.find_for_database_authentication(warden_conditions)
  	conditions = warden_conditions.dup
	if login = conditions.delete(:login)
		where(conditions.to_hash).where(["lower(username) = :value OR lower(email) = :value", { :value => login.downcase }]).first
	elsif conditions.has_key?(:username) || conditions.has_key?(:email)
		if conditions[:username].nil?
	      where(conditions.to_hash).first
	    else
	      where(username: conditions[:username].to_hash).first
	    end
	end
  end

  #NIM
  validates_length_of :nim, :minimum => 8, :maximum => 8

  #VOTER
  acts_as_voter

  #PAPERCLIP
  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/, :default_url => "/assets/no-image.jpg"

  #ACTS AS FOLLOWER
  acts_as_followable
  acts_as_follower
end
