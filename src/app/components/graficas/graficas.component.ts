import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-annotation';
import { Label } from 'ng2-charts';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.scss']
})
export class GraficasComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[];
  public chartColors;

  private categoria;
  private dato: string;
  private datos = [];
  private nombreCategoria = [];
  private colores = [];

  constructor(protected categoriaService: CategoriaService) {
    this.getCategoria();
  }

  ngOnInit() {
  }

  getCategoria() {
    this.categoriaService.getCategorias().subscribe(res => {
      this.categoria = res;
      for (const cate of this.categoria) {
        this.dato = cate.DATOS_CATE.split(',');
        this.datos.push(this.dato);
        this.nombreCategoria.push(cate.NOMBRE_CATE);
        this.colores.push(cate.COLOR_CATE);
      }
     
      this.cargarDatos(this.datos, this.nombreCategoria, this.colores);
    });
  }

  cargarDatos(datos, nombreCategoria, colores) {
    this.barChartData = [];
    this.chartColors = [];

    for (const index in datos) {
      this.barChartData.push({ data: datos[index], label: nombreCategoria[index] });
      this.chartColors.push({backgroundColor: colores[index]});
    }

  }

}
