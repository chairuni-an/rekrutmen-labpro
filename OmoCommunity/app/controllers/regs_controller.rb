class RegsController < Devise::RegistrationsController
	def destroy
		Follow.destroy_all(followable_id:resource.id)
		Follow.destroy_all(follower_id: resource.id)
		Notifpostlike.destroy_all(uxid: resource.id)
		Notifpostlike.destroy_all(user_id: resource.id)
		Notifpost.destroy_all(tipe: "is following you", post_id: resource.id)
		Notifpost.destroy_all(tipe: "is following you", user_id: resource.id)
		resource.destroy
	    Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name)
	    set_flash_message! :notice, :destroyed
	    yield resource if block_given?
		respond_with_navigational(resource){ redirect_to after_sign_out_path_for(resource_name) }
	end
	def edit
		super
	end
end