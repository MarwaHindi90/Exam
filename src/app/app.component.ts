import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InvestmentCalculatorComponent } from "./investment-calculator/investment-calculator.component";
import { AnnualData, InvestmentDetails } from './types';
import { ResultsComponent } from './results/results.component';
import calculateInvestmentResults from './investment-results';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, InvestmentCalculatorComponent, ResultsComponent] // import the CommonModule because we use ngFor in the template

})
export class AppComponent {
  title = 'first-app-angular';
  calculateResults: AnnualData[] = []


onInvestmentDetails(investment: InvestmentDetails) {
  this.calculateResults = calculateInvestmentResults(
    investment.initialInvestment,
    investment.annualInvestment,
    investment.duration,
    investment.expectedReturn
  );
}

}
