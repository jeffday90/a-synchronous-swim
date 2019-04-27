

const serverUrl = 'http://127.0.0.1:3000';

//
// TODO: build the swim command fetcher here
//
/*
  issue random command using a GET request
  request a random swim command from server
*/
const getRequest = () => {
  $.get(serverUrl, (data) => {
    //   if (err) {
    //     console.log('get Request Error!', err);
    //   } else {
    //     console.log('WE GOT DATA!!', data);
    //   }
    // });
    console.log(data);
    SwimTeam.move(data);
  })
    .done(() => {
      console.log('Succesful get response')
    })
    .fail(() => {
      console.log('Error!!!! GET response')
    })
};

setInterval(getRequest, 50);







/////////////////////////////////////////////////////////////////////
// The ajax file uplaoder is provided for your convenience!
// Note: remember to fix the URL below.
/////////////////////////////////////////////////////////////////////

const ajaxFileUplaod = (file) => {
  var formData = new FormData();
  formData.append('file', file);
  $.ajax({
    type: 'POST',
    data: formData,
    url: serverUrl,
    cache: false,
    contentType: false,
    processData: false,
    success: () => {
      // reload the page
      window.location = window.location.href;
    }
  });
};

$('form').on('submit', function (e) {
  e.preventDefault();

  var form = $('form .file')[0];
  if (form.files.length === 0) {
    console.log('No file selected!');
    return;
  }

  var file = form.files[0];
  if (file.type !== 'image/jpeg') {
    console.log('Not a jpg file!');
    return;
  }

  ajaxFileUplaod(file);
});


