export class CreateTaskDto {
  title: string;
  desc: string;
  status?: 'completed | notcompleted | pending | ongoing';
  userId: string;
}
