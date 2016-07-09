CKEDITOR.editorConfig = function(config)
{
	config.filebrowserImageBrowseUrl = '/ckeditor/pictures';
  	config.filebrowserImageUploadUrl = '/ckeditor/pictures';
	config.extraPlugins = 'attach';
    config.toolbar_mini =
    [
        { name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ] },
        { name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'] },
        { name: 'insert', items : [ 'Image','Table','HorizontalRule','Smiley','SpecialChar' ] },
        { name: 'colors', items : [ 'TextColor','BGColor' ] }
    ];  
}; 

CKEDITOR.on('dialogDefinition', function( ev )
{
   var dialogName = ev.data.name;  
   var dialogDefinition = ev.data.definition;
         
   switch (dialogName) {  
   case 'image': //Image Properties dialog      
   dialogDefinition.removeContents('Upload');
   dialogDefinition.removeContents('advanced');
   break;      
   case 'link': //image Properties dialog          
   dialogDefinition.removeContents('advanced');   
   break;
   }
});