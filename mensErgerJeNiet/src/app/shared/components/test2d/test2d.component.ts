import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2d',
  templateUrl: './test2d.component.html',
  styleUrls: ['./test2d.component.css']
})
export class Test2dComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

//create 2d array
    const  array2D = [
      ['R','Y', 'R' ],
      ['Y','R', 'Y' ],
      ['R','Y', 'R' ],
    ]
    const canvas = document.querySelector('canvas');
    canvas.width = 600;
    canvas.height = 600;
    const cellSide = 200;

    let ctx = canvas.getContext('2d');

//iterate every array in array2D
    for (let i =0; i< array2D.length; i++){
      //iterate through every of its item
      for (let j = 0; j <array2D[i].length; j++) {
        console.log(array2D[i][j]);
      }
    }

    for (let i = 0; i < array2D.length; i++) {
      for (let j = 0; j < array2D[i].length; j++) {
        let x = j * cellSide;
        let y = i * cellSide;

        let cellColor = '#e74c3c';
        if (array2D[i][j] === 'Y') cellColor = '#f1c40f';

        ctx.beginPath();
        ctx.fillStyle = cellColor;
        ctx.fillRect(x, y, cellSide, cellSide);

      }
    }


}


}
