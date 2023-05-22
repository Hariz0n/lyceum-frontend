export class HelpRequestDtoResponse {
  id!: number;
  startDate!: string;
  description!: string;
  lesson!: {
    id: number;
    name: string;
    information: string;
    difficultyScore: number;
    subject: {
      id: number;
      name: string;
    };
  };
  applicant!: {
    id: number;
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    photoPath: string;
    class: {
      id: number;
      name: string;
      grade: number;
    };
  };
}
