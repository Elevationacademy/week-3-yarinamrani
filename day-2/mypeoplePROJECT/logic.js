

$.ajax({
  url: 'https://randomuser.me/api/?results=10',
  dataType: 'json',
  success: function(data) {
    const people = data.results
    console.log(people)
    let source = $('#people').html()
    let template = Handlebars.compile(source)
    let newHTML = template({ people });
    console.log(newHTML)
    $('#container').append(newHTML);
  }
})


