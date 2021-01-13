document.getElementById('answer').addEventListener('click', pizza)

function pizza () {
  const size = document.getElementById('size').value
  let top = document.getElementById('top').value
  top = parseInt(top)
  let total = 0
  if ((size === 'Large') && (top === 1)) {
    total = (6 + 1) * 1.13
    total = total.toFixed(2)
    alert('The total cost is $' + total)
  } else if ((size === 'Extra large') && (top === 1)) {
    total = (10 + 1) * 1.13
    total = total.toFixed(2)
    alert('The total cost is $' + total)
  }
  if ((size === 'Large') && (top === 2)) {
    total = ( 6 + 1.75 ) * 1.13
    total = total.toFixed(2)
    alert('The total cost is $' + total)
  } else if ((size === 'Extra large') && (top === 2)) {
    total = (10 + 1.75) * 1.13
    total = total.toFixed(2)
    alert('The total cost is $' + total)
  }
  if ((size === 'Large') && (top === 3)) {
    total = (6 + 2.50) * 1.13
    total = total.toFixed(2)
    alert('The total cost is $' + total)
  } else if ((size === 'Extra large') && (top === 3)) {
    total = (10 + 2.50) * 1.13
    total = total.toFixed(2)
    alert('The total cost is $' + total)
  }
  if ((size === 'Large') && (top === 4)) {
    total = (6 + 3.35) * 1.13
    total = total.toFixed(2)
    alert('The total cost is $' + total)
  } else if ((size === 'Extra large') && (top === 4)) {
    total = (10 + 3.35) * 1.13
    total = total.toFixed(2)
    alert('The total cost is $' + total)
  }
}
