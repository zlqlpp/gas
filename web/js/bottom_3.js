
document.write("<div style=\"clear:both;\"></div>");

document.write("<div style=\"background-image:url(/images\/mbacks.jpg ); height:17px; width:960px;\">&nbsp;</div>");
document.write('<div class="navBox">');
document.write('        <ul class="navTxt">');
document.write('            <li><a href="/index.htm">��ҳ</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('            <li><a href="/aboutus.htm">��˾���</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('           <li><a href="/quality.htm">��˾����</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('            <li><a href="/product.htm">��ƷĿ¼</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('            <li><a href="/news.htm">���Ŷ�̬</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('            <li><a href="/hr.htm">������Դ</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('            <li><a href="/q_a.htm">�����ʴ�</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('            <li><a href="/contact.htm">��ϵ����</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('            <li class="guid_back">�߳�Ϊ������!</li>');
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
document.write("                �������ջ����������޹�˾</div>");
document.write("                <div style=\"margin-left:5px; margin-top:5px; color:#333;\">");
document.write("    ��ַ�������г���������·71����ǹ���1506�� | �绰��400-070-9968  (010)57238388  57235388");
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
	   if(keyword.value==""||keyword.value=="����д���عؼ���")
       {
        alert("����д���عؼ���");
        return false;
       }
       window.open("/s/?keyword=" + escape(keyword.value));
     }
	}