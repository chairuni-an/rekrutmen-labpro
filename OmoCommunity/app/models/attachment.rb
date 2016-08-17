class Attachment < ActiveRecord::Base
  belongs_to :topic
  belongs_to :post
  mount_uploader :attachment, AttachmentUploader
end
