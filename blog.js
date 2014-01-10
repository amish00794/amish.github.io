function addpost()
{
	
	try
	{
	var listRef = new Firebase('https://1389379985131.firebaseio.com/');

	var title = $('#InputTitle').val(); //document.getElementById("InputTitle");
	var content=$('#Inputcontent').val(); //document.getElementById("Inputcontent");
	var blogdate=new Date().toDateString();


	//listRef.push({BlogTitle:title, BlogContent:content});
	listRef.push({postname: title, postcontent: content,postdate:blogdate});

	alert("Datasaved")
	}
	catch(err)
   {
   		alert(err.value);
   }
};


function readpost()
{    
      
    try 
    {
        var messageListRef = new Firebase('https://1389379985131.firebaseio.com/');
            
          messageListRef.once('value', function(allMessagesSnapshot) {
          allMessagesSnapshot.forEach(function(messageSnapshot) {
          // Will be called with a messageSnapshot for each message under message_list.
                       
            var ul=document.getElementById('post-ul');
            var li=document.createElement('div');
         
            var li2=document.createElement('li');
             
            var litext2 = document.createTextNode(messageSnapshot.val().postname);
                
            var li3=document.createElement('li');
            var litext3 = document.createTextNode(messageSnapshot.val().postcontent);
            var li4=document.createElement('li');
            var litext4 = document.createTextNode("Post Created: " + messageSnapshot.val().postdate);
                            
                ul.appendChild(li);
                li2.appendChild(litext2);
                ul.appendChild(li2);
                
                li3.appendChild(litext3);
                ul.appendChild(li3);
                li4.appendChild(litext4);
                ul.appendChild(li4);
                     
         
          });
          });
   
    }
    catch(err)
    {
      alert("Not available right now");
    }
};     
