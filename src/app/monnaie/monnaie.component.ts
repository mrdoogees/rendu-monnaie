import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-monnaie',
	templateUrl: './monnaie.component.html',
	styleUrls: ['./monnaie.component.css']
})
export class MonnaieComponent implements OnInit {

	cash: number = 42;
	results: string[] = [" ... ", " ... ", " ... "];
	
	constructor() { 
	}

	ngOnInit(): void {
	}

	change() {

		let cashTemp: number = this.cash;

		console.log("cash = " +this.cash);
		
		let coins: number[] = [2, 5, 10];

		let chosen: number[] = [0, 0, 0];

		for(let i = coins.length; i >= 0; i--) {
			if(cashTemp >= coins[i]) {
				chosen[i] = Math.trunc(cashTemp/coins[i]);
				cashTemp = cashTemp%coins[i];
			}
		}

		let cashTest: number = 0;

		for(let i = 0; i < coins.length; i++) {
			cashTest += coins[i] * chosen[i];
		}
		
		if(cashTest == this.cash && cashTest != 0) {
			this.results = [];
			for(let i = 0; i < coins.length; i++) {
				if(chosen[i] != 0) {
					console.log(chosen[i] +"x"+ coins[i]);
					this.results.push(chosen[i] +" x "+ coins[i] +" €");
				}
			}
		}
		else {
			console.log("Impossible");
			this.results = [];
			this.results.push("Impossible");
		}
	}

}
