


document.write('<div class="navBox">');
document.write('        <ul class="navTxt">');
document.write('            <li><a href="/index.htm">首页</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('            <li><a href="/aboutus.htm">公司简介</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('            <li><a href="/quality.htm">公司资质</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('            <li><a href="/product.htm">产品目录</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('            <li><a href="/news.htm">新闻动态</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('            <li><a href="/hr.htm">人力资源</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('            <li><a href="/q_a.htm">留言问答</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('            <li><a href="/contact.htm">联系我们</a><img src="/images/navBlank.gif" alt="" /></li>');
document.write('            <li class="guid_back">竭诚为您服务!</li>');
document.write('        </ul>');
document.write('<input type="text" id="searchTxt" class="searchTxts" onkeypress="return GoSearch()"/>');
document.write('</div>');

function GoSearch()
	{    
	var keyword=document.getElementById("searchTxt");
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
