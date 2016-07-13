require(['jquery','validate','layer','ueditorconfig','ueditor','cssjs!layercss'], function (){

	$('#btn').click(function(){
		layer.open({
            type: 1,
            area: ['600px', '360px'],
            content: '\<\div style="padding:20px;"><a href="javascript:" id="eebtn">点击我</a>\<\/div>'
        });
	});

	//实例化编辑器
	var ue = UE.getEditor('container');

	

});