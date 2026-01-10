export interface SplitParticipant {
  id: string;
  name: string;
  avatar: string;
  paid: boolean;
  billedAmount: string;
}
export interface SplitDetails {
  title: string;
  billStatus: boolean;
  billAmount: string;
  dateCreated: string;
  participants: SplitParticipant[];
}
