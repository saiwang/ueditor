module( 'core.htmlparser' );

test( '', function() {
    var div = te.dom[0];
    var root = UE.htmlparser('<i>sdfsdfsdfsf</i>');
    equals(root.toHtml(),'<i>sdfsdfsdfsf</i>');
    root = UE.htmlparser('<i>sdf<b>sdfsdsd</b>fsdfsf</i>');
    equals(root.toHtml(),'<i>sdf<b>sdfsdsd</b>fsdfsf</i>');
    root = UE.htmlparser('<i dsf="sdf" sdf="wewe" readonly >sdf</i>');
    equals(root.toHtml(),'<i dsf="sdf" sdf="wewe" readonly >sdf</i>');
    root = UE.htmlparser('<i dsf="sdf" sdf="wewe" readonly >sd<!--fasdf-->f</i>');
    equals(root.toHtml(),'<i dsf="sdf" sdf="wewe" readonly >sd<!--fasdf-->f</i>');
    root = UE.htmlparser('<p><td></td></p>');
    equals(root.toHtml(),'<p><table><tbody><tr><td></td></tr></tbody></table></p>');
    root = UE.htmlparser('<p><td>sdfsdfsdf</p>');
    equals(root.toHtml(),'<p><table><tbody><tr><td>sdfsdfsdf</td></tr></tbody></table></p>');
    root = UE.htmlparser('<img src="file:///C:/DOCUME~1/DONGYA~1/LOCALS~1/Temp/msohtmlclip1/01/clip_image002.jpg" width="553" height="275" />');
    equals(root.toHtml(),'<img src="file:///C:/DOCUME~1/DONGYA~1/LOCALS~1/Temp/msohtmlclip1/01/clip_image002.jpg" width="553" height="275" />');
    root = UE.htmlparser('<td></td>' + '\n\r' + '<td></td>');
    equals(root.toHtml(),'<table><tbody><tr><td></td><td></td></tr></tbody></table>');
    root = UE.htmlparser('<li>sdfsdfsdf<li>sdfsdfsdfsdf');
    equals(root.toHtml(),'<ul><li>sdfsdfsdf</li><li>sdfsdfsdfsdf</li></ul>');
    root = UE.htmlparser('<script type="text/javascript" charset="utf-8" src="editor_api.js"></script>');
    equals(root.toHtml().replace(/[ ]+>/g,'>'),'<script type="text/javascript" charset="utf-8" src="editor_api.js"></script>');
    root = UE.htmlparser('<table width="960"><tbody><tr><td width="939" valign="top"><br></td></tr></tbody></table><p><br></p>');
    equals(root.toHtml().replace(/[ ]+>/g,'>'),'<table width="960"><tbody><tr><td width="939" valign="top"><br/></td></tr></tbody></table><p><br/></p>');
    root = UE.htmlparser('<ol><li><em><u>sdf<li>sdfsdf</ol>');
    equals(root.toHtml().replace(/[ ]+>/g,'>'),'<ol><li><em><u>sdf</u></em></li><li>sdfsdf</li></ol>');
    root = UE.htmlparser('<ol><li><em>sdf</em></li><ul><li>a</li><li>b</li><li>c</ul><li>jkl</ol>');
    equals(root.toHtml().replace(/[ ]+>/g,'>'),'<ol><li><em>sdf</em></li><ul><li>a</li><li>b</li><li>c</li></ul><li>jkl</li></ol>');
});