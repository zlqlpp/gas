if (top.location != self.location)top.location=self.location;
function killErrors() {
return true;
}

window.onerror = killErrors;

document.writeln("<TABLE cellpadding=\"0\" cellspacing=\"0\" id=\"top_table\"><tr>");
document.writeln("		<td id=\"logo\"><a href=\"\/\"><img src=\"\/images\/logo.gif\" alt=\"最好模板\" \/><\/a><\/td>");
document.writeln("<td id=\"top_link\">");
document.writeln("		<FIELDSET><LEGEND><font color=blue>旗下业务<\/font><\/LEGEND>");
document.writeln("		<div id=\"top_link_font\"><a href='http://www.ninedns.com/news/read.asp?id=17972' target=_blank><span class=\"red_font\">免费空间<\/span><\/a> <a href=\'http:\/\/www.codejia.com\' target=_blank>源码下载<\/a> <a href=\'http:\/\/www.ninedns.com\/\' target=_blank>九网互联<\/a> <a href=\'http:\/\/www.huweishen.com\' target=_blank>护 卫 神<\/a><br \/><a href=\'\/list.asp\'>模板搜索<\/a>&nbsp;<a href=\'http:\/\/bestmoban.com\/children\/\' target=_blank><span class=\"red_font\">儿童节<\/span><\/a>&nbsp;<a href=\'http:\/\/bestmoban.com\/duanwujie\/\'><span class=\"red_font\">端午节<\/span><\/a>&nbsp;<a href='http://www.ninedns.com/news/read.asp?id=16732'  target=_blank><font color=blue>免费商城 </font><\/a><\/div>");
document.writeln("		<\/FIELDSET>");
document.writeln("		<\/td>")
document.writeln("")
document.writeln("		<td id=\"banner\"><a href=http://www.9host.cn/redir/bestmoban.asp target=_blank><img src=/images/468_60_agent.gif height=60 width=468 border=0></a>");
document.writeln("<\/td>");
document.writeln("	<\/tr>");
document.writeln("	<\/TABLE>")
//顶部专用
  
  function changebg(myitem,mynum)
  	{
  	if(mynum==2)
  		{
			document.getElementById(myitem).style.backgroundImage='url(/images/menu_bg2.gif)';
		}
	else
		{
			document.getElementById(myitem).style.backgroundImage='url(/images/menu_bg3.gif)';
		}
	}

var have_login=0; //是否登陆
var html_need_money=-8;//模板HTML文件需要的积分（初始值）
var need_money=-8; //模板所需要积分（初始值）
var is_vip =0;//是否VIP会员
var have_money=0;//拥有积分数

var this_url
this_url=""
this_url=String(window.location).toLowerCase();

function chk_down_money()
	{
	//检测用户下载模板提示
	//免费模板无提示
	if (need_money>0)
		{
		
		if (is_vip==0)
			{
				if(confirm('此模板需要收取'+need_money+'点积分.\n\n如果你以前已付费下载此模板，将不再收取费用\n\n你确认要下载吗？'))
				{
						return true;
				}
				else
					{
						return false;	
					}
			}
		}

	}

function chk_html_down()
	{
	//检测用户下载模板提示
	//免费模板无提示
	if (html_need_money>0)
		{
		
		if (is_vip==0)
			{
				if(confirm('此文件需要收取'+html_need_money+'点积分.\n\n如果你以前已付费下载，将不再收取费用\n\n你确认要下载吗？'))
				{
						return true;
				}
				else
					{
						return false;	
					}
			}
		else
			{
				//是VIP会员，5折
				if(confirm('此文件需要收取'+html_need_money+'*0.5='+html_need_money*0.5+'点积分.\n\n如果你以前已付费下载，将不再收取费用\n\n你确认要下载吗？'))
				{
						return true;
				}
				else
					{
						return false;	
					}
			}
		}

	}



