// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.facebox
//= require jquery.turbolinks
//= require_tree .
//= require jquery
//= require jquery.jcrop
//= require papercrop
//= require ckeditor/init

CKEDITOR.on('dialogDefinition', function( ev )
{
   var dialogName = ev.data.name;  
   var dialogDefinition = ev.data.definition;
   dialogDefinition.minHeight = 150;
   dialogDefinition.resizable = CKEDITOR.DIALOG_RESIZE_NONE;
   switch (dialogName) {  
   case 'image': //Image Properties dialog      
   dialogDefinition.removeContents('Upload');
   dialogDefinition.removeContents('advanced');
   dialogDefinition.removeContents('Link');
   break;      
   case 'link': //image Properties dialog          
   dialogDefinition.removeContents('advanced');   
   break;
   }
   if ( dialogName == 'image' ){
        dialogDefinition.removeContents( 'advanced' );
        dialogDefinition.removeContents( 'Link' );
        var infoTab = dialogDefinition.getContents( 'info' );
        infoTab.remove( 'ratioLock' ); 
        infoTab.remove( 'txtHeight' );          
        infoTab.remove( 'txtWidth' );          
        infoTab.remove( 'txtBorder'); 
        infoTab.remove( 'txtHSpace'); 
        infoTab.remove( 'txtVSpace'); 
        infoTab.remove( 'cmbAlign' ); 
        infoTab.remove( 'txtAlt' ); 
        infoTab.remove( 'htmlPreview' )
    }
});
