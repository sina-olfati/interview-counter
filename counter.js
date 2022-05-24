var number = []

var count = () => {
    for (let i = 1; i <= 100; i++) {
        number.push(i)
    }

    number.map(a => {
      var is4 = a % 4
      var is7 = a % 7
      var result = `${a} is divisible to 4: ${is4 === 0} and 7: ${is7 === 0}`
      console.log(result)
    })
}


count()