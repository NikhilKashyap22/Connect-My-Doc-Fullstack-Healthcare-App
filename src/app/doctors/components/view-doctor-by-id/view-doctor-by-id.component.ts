import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../models/doctor.model';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../../services/doctor.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DoctorNameFormatterPipe } from '../../../pipes/doctor-name-formatter.pipe';

@Component({
  selector: 'app-view-doctor-by-id',
  standalone: true,
  imports: [NgIf, FormsModule, NgFor, DoctorNameFormatterPipe],
  templateUrl: './view-doctor-by-id.component.html',
  styleUrl: './view-doctor-by-id.component.css'
})
export class ViewDoctorByIdComponent implements OnInit{
  doctorId!: string;
  doctor!: Doctor;
  isLoading = false;

  constructor(private doctorService: DoctorService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.doctorId = params['id'];
        this.fetchDoctor();
      }
    });
  }

  public fetchDoctor(): void {
    if (!this.doctorId) {
      alert('Please enter a valid Doctor ID.');
      return;
    }
    this.doctorService.getDoctorById(this.doctorId).subscribe(
      (data) => {
        this.doctor = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching doctor details:', error);
        this.doctor = undefined!;
        this.isLoading = false;
      }
    );
  }

}
