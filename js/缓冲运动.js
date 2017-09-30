function get_byid_name(str)
	{
		if(str.charAt(0)=="#")
			{
				return document.getElementById(str.substring(1));
			}
	}