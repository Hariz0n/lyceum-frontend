export class SolvedHelpRequestDtoResponse {
  id!: number;
  startDate!: string;
  endDate!: string;
  message!: string;
  description!: string;
  isRejected!: boolean;
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
  mentor!: {
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
