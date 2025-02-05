
// Define the interface for services and API paths to ensure better type safety
interface ApiPaths {
  [key: string]: {
    [key: string]: string;
  };
}

interface Services {
  [key: string]: string;
}

export const environment = {
  production: false,

  // Base URL for the API, can be adjusted based on environment
  baseApiUrl: 'http://localhost:8080/api',

  // Services mapping to their endpoints
  services: {
    appointments: '/appointments',
    clinics: '/clinics',
    doctors: '/doctors',
    doctorSchedule: '/doctorschedule',
    patients: '/patients',
    masterdata: '/masterdata',
    // You can add more services here
  } as Services,

  // Define API paths for various services
  apiPaths: {
    doctors: {
      getDoctorById: '/get-doctor-by-Id/',
      getAllDoctors: '/get-all-doctors',
      createDoctor: '/addDoctor',
      updateDoctorAddress: '/update-doctor-address/',
      updateDoctorExperience: '/update-doctor-experience/',
      deleteDoctor: '/delete-doctor/',
    },
    doctorSchedule:{
      createSchedule:'/add-schedule',
      getAllSchedules:'/get-all-doctor-schedules',
      getScheduleById:'/get-schedule-by-Id/',
      updateDoctorSchedule:'/update-doctor-schedule/',
      deleteDoctorSchedule:'/delete-doctor-schedule/'
    },
    patients: {
      getPatientById: '/{id}',
      getAllPatients: '/all',
      registerPatient: '/register',
    },
    clinics: {
      getClinicById: '/{id}',
      getAllClinics: '/all',
      createClinic: '/create',
    },
    appointments: {
      createAppointment: '/create',
      getAppointmentsByDoctor: '/doctor/{doctorId}',
      getAppointmentsByPatient: '/patient/{patientId}',
    },
    authentication: {
      login: '/login',
      register: '/register',
      logout: '/logout',
    },
    masterdata: {
      getSpecializations: '/specializations',
      getDepartments: '/departments',
    },
    diagnostics: {
      bookService: '/book',
      getAvailableServices: '/services',
    },
  } as ApiPaths,
};
