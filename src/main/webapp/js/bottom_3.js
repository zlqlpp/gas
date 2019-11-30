
document.write("<div style=\"clear:both;\"></div>");

document.write("<div style=\"background-image:url(/images\/mbacks.jpg ); height:17px; width:960px;\">&nbsp;</div>");
document.write('<div class="navBox">');
document.write('        <ul class="navTxt">');
document.write('            <li><a href="/index.htm">首页</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('            <li><a href="/aboutus.htm">公司简介</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('           <li><a href="/quality.htm">公司资质</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('            <li><a href="/product.htm">产品目录</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('            <li><a href="/news.htm">新闻动态</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('            <li><a href="/hr.htm">人力资源</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('            <li><a href="/q_a.htm">留言问答</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('            <li><a href="/contact.htm">联系我们</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('            <li class="guid_back">竭诚为您服务!</li>');
document.write('        </ul>');
document.write('<input type="text" id="searchTxt2" class="searchTxts" onkeypress="return GoSearch2()"/>');
document.write('    </div>');
document.write("<div style=\" width:960px; margin:15px auto 0 auto; border:solid 1px gray; height:60px; clear:both;\">");
document.write("<TABLE cellSpacing=0 cellPadding=0 width=940 border=0 style=\"margin:4px;\">");
document.write("        <TBODY>");
document.write("        <TR>");
document.write("          <TD>");
document.write("            <table style=\"width:100%;\">");
document.write("                <td style=\"width:167px; height:45px; border:solid 1px gray;\"><img src=\"/images\/bot.jpg\" /></td>");
document.write("                <td align=\"left\" style=\"padding-left:6px;\">");
document.write("                	<div style=\"margin-left:5px; margin-top:2px; font-size:14px; color:#000;\">");
document.write("                北京京空华特气体有限公司</div>");
document.write("                <div style=\"margin-left:5px; margin-top:5px; color:#333;\">");
document.write("    地址：北京市朝阳区朝阳路71号锐城国际1506室 | 电话：400-070-9968  (010)57238388  57235388");
document.write("                </td>");
document.write("            </table>");
document.write("          </TD></TR></TBODY></TABLE>");
document.write("</div>");
document.write("<div style=\"clear:both; height:30px;\"></div>");

function GoSearch2()
	{    
	var keyword=document.getElementById("searchTxt2");
	  if(event.keyCode==13)
     {
	   if(keyword.value==""||keyword.value=="请填写搜素关键词")
       {
        alert("请填写搜素关键词");
        return false;
       }
       window.open("/s/?keyword=" + escape(keyword.value));
     }
	}