import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Line, Pie } from 'react-chartjs-2'

export default function HomeContainer() {

    const lineChartData = {
        labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
        datasets: [
            {
                label: 'Ventes de la semaine',
                data: [15, 10, 20, 10, 25, 35, 30],
                fill: true,
                backgroundColor: '#acdf8783',
                borderColor: '#a4de02',
                tension: 0.25
            }
        ],
    }

    const lineChartOptions = {
        maintainAspectRatio: false,
        scales: {
            y: {
                min: 0,
                max: 50
            }
        }
    }

    const pieChartData = {
        labels: [
            'Jeux',
            'OS',
            'Logiciels'
        ],
        datasets: [{
            label: 'Distribution des ventes',
            data: [10, 4, 3],
            backgroundColor: [
                '#1e5631',
                '#a4de02',
                '#76ba1b'
            ],
            hoverOffset: 4
        }]
    }

    return (
        <div className="home-body">
            <div className="incomes">
                <div className="income income-daily">
                    <div className="income-title daily-title">Revenus du jour</div>
                    <div className="income-amount">15k Ar</div>
                </div>
                <div className="income income-weekly">
                    <div className="income-title weekly-title">Achats de la semaine</div>
                    <div className="income-amount">45k Ar</div>
                </div>
                <div className="income most-game-weekly">
                    <div className="income-title most-weekly-title">Jeu le plus acheté de la semaine</div>
                    <div className="income-text"><span>Elden Ring - Deluxe Edition</span></div>
                </div>
                <div className="income least-game-weekly">
                    <div className="income-title least-weekly-title">Jeu le moins acheté</div>
                    <div className="income-text"><span>Max Payne 3</span></div>
                </div>
            </div>
            <div className="charts">
                <div className="line-chart">
                    <Line
                        datasetIdKey='id'
                        data={lineChartData}
                        options={lineChartOptions}
                    />
                </div>
                <div className="pie-charr">
                    <Pie 
                        data={pieChartData}
                    />
                </div>
            </div>
        </div>
    )
}
