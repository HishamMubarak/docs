var header = document.querySelector('.md-header-nav__topic');

var select = document.createElement('select');
var versions = [
  'master',
  '0.12.x',
  '0.11.x',
  '0.10.x',
]

var option = document.createElement('option');
option.text = "Versions";
option.value = '';
select.appendChild(option);

versions.forEach(function(version) {
  var option = document.createElement('option');
  option.text = version;
  option.value = 'https://' + version + '.docs.colyseus.io/';
  select.appendChild(option);
});

select.onchange = function() {
  if (!select.value) return;
  location.href = select.value;
}

header.appendChild(select);