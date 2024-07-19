let mocksArrCars =  [ 
    {category :'B', carsNumb : ['CAB138','CAB139','CAB140','CAB141']},
    {category :'C', carsNumb : ['CAB320','CAB321','CAB322']},
    {category :'D', carsNumb : ['CAB699','CAB700','CAB701','CAB702','CAB703']},
  ]

let result = mocksArrCars.find(({category}) => category === 'C').carsNumb 

console.log(result)