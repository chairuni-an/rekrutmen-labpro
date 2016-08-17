CKEDITOR.editorConfig = function(config)
{
	config.filebrowserImageBrowseUrl = '/ckeditor/pictures';
  	config.filebrowserImageUploadUrl = '/ckeditor/pictures';
    config.toolbar =
    [
        { name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ] },
        { name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'] },
        { name: 'insert', items : [ 'Image','Table','HorizontalRule','Smiley','SpecialChar' ] },
        { name: 'colors', items : [ 'TextColor','BGColor' ] }
    ];  
}; 
