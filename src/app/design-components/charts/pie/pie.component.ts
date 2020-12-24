import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  @Input() data;
  private svg;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);
  private radius = 500
  @Input() x_property;
  @Input() y_property;


  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.drawPie(this.data);
  }

  private createSvg(): void {
      this.svg = d3.select("figure")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      // .attr(
      //   "transform",
      //   "translate(" + this.width / 2 + "," + this.height / 2 + ")"
      // );
  }

  private drawPie(data: any[]): void {
    const pie = d3.pie<any>().value((d: any) => Number(d[this.y_property]));
    let colors = d3.schemeCategory10;

    // Build the pie chart
    this.svg
    .selectAll('pieces')
    .data(pie(data))
    .enter()
    .append('path')
    .attr('d', d3.arc()
      .innerRadius(this.radius/2)
      .outerRadius(this.radius)
    )
    .attr('fill', (d, i) => (colors[i]))
    .attr("stroke", "#121926")
    .style("stroke-width", "1px");

    // Add labels
    const labelLocation = d3.arc()
    .innerRadius(100)
    .outerRadius(this.radius);

    this.svg
    .selectAll('pieces')
    .data(pie(data))
    .enter()
    .append('text')
    .text(d => d.data[this.x_property])
    .attr("transform", d => "translate(" + labelLocation.centroid(d) + ")")
    .style("text-anchor", "middle")
    .style("font-size", 15);

}

}
