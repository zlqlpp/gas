


document.write('<div class="navBox">');
document.write('        <ul class="navTxt">');
document.write('            <li><a href="/index.htm">��ҳ</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('            <li><a href="/aboutus.htm">��˾���</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('            <li><a href="/quality.htm">��˾����</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('            <li><a href="/product.htm">��ƷĿ¼</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('            <li><a href="/news.htm">���Ŷ�̬</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('            <li><a href="/hr.htm">������Դ</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('            <li><a href="/q_a.htm">�����ʴ�</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('            <li><a href="/contact.htm">��ϵ����</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('            <li class="guid_back">�߳�Ϊ������!</li>');
document.write('        </ul>');
document.write('<input type="text" id="searchTxt" class="searchTxts" onkeypress="return GoSearch()"/>');
document.write('</div>');

function GoSearch()
	{    
	var keyword=document.getElementById("searchTxt");
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
