if (top.location != self.location)top.location=self.location;
function killErrors() {
return true;
}

window.onerror = killErrors;

document.writeln("<TABLE cellpadding=\"0\" cellspacing=\"0\" id=\"top_table\"><tr>");
document.writeln("		<td id=\"logo\"><a href=\"\/\"><img src=\"\/images\/logo.gif\" alt=\"���ģ��\" \/><\/a><\/td>");
document.writeln("<td id=\"top_link\">");
document.writeln("		<FIELDSET><LEGEND><font color=blue>����ҵ��<\/font><\/LEGEND>");
document.writeln("		<div id=\"top_link_font\"><a href='http://www.ninedns.com/news/read.asp?id=17972' target=_blank><span class=\"red_font\">��ѿռ�<\/span><\/a> <a href=\'http:\/\/www.codejia.com\' target=_blank>Դ������<\/a> <a href=\'http:\/\/www.ninedns.com\/\' target=_blank>��������<\/a> <a href=\'http:\/\/www.huweishen.com\' target=_blank>�� �� ��<\/a><br \/><a href=\'\/list.asp\'>ģ������<\/a>&nbsp;<a href=\'http:\/\/bestmoban.com\/children\/\' target=_blank><span class=\"red_font\">��ͯ��<\/span><\/a>&nbsp;<a href=\'http:\/\/bestmoban.com\/duanwujie\/\'><span class=\"red_font\">�����<\/span><\/a>&nbsp;<a href='http://www.ninedns.com/news/read.asp?id=16732'  target=_blank><font color=blue>����̳� </font><\/a><\/div>");
document.writeln("		<\/FIELDSET>");
document.writeln("		<\/td>")
document.writeln("")
document.writeln("		<td id=\"banner\"><a href=http://www.9host.cn/redir/bestmoban.asp target=_blank><img src=/images/468_60_agent.gif height=60 width=468 border=0></a>");
document.writeln("<\/td>");
document.writeln("	<\/tr>");
document.writeln("	<\/TABLE>")
//����ר��
  
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

var have_login=0; //�Ƿ��½
var html_need_money=-8;//ģ��HTML�ļ���Ҫ�Ļ��֣���ʼֵ��
var need_money=-8; //ģ������Ҫ���֣���ʼֵ��
var is_vip =0;//�Ƿ�VIP��Ա
var have_money=0;//ӵ�л�����

var this_url
this_url=""
this_url=String(window.location).toLowerCase();

function chk_down_money()
	{
	//����û�����ģ����ʾ
	//���ģ������ʾ
	if (need_money>0)
		{
		
		if (is_vip==0)
			{
				if(confirm('��ģ����Ҫ��ȡ'+need_money+'�����.\n\n�������ǰ�Ѹ������ش�ģ�壬��������ȡ����\n\n��ȷ��Ҫ������'))
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
	//����û�����ģ����ʾ
	//���ģ������ʾ
	if (html_need_money>0)
		{
		
		if (is_vip==0)
			{
				if(confirm('���ļ���Ҫ��ȡ'+html_need_money+'�����.\n\n�������ǰ�Ѹ������أ���������ȡ����\n\n��ȷ��Ҫ������'))
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
				//��VIP��Ա��5��
				if(confirm('���ļ���Ҫ��ȡ'+html_need_money+'*0.5='+html_need_money*0.5+'�����.\n\n�������ǰ�Ѹ������أ���������ȡ����\n\n��ȷ��Ҫ������'))
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



