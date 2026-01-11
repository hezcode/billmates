export interface SplitParticipant {
  id: string;
  name: string;
  avatar: string;
  paid: boolean;
  billedAmount: string;
}
export interface SplitDetails {
  id: string;
  title: string;
  billStatus: boolean;
  billAmount: string;
  dateCreated: string;
  participants: SplitParticipant[];
}
