import id from "@angular/common/locales/extra/id";

export interface ScheduleItem {
  image: string;
  title: string;
  subtitle: string;
  day: string;
  time: string;
}

export interface Band {
  id: number;
  nome_banda: string;
  nome_contato :string;
  email_banda     :string;
  estilo_musical  :string;
  image_url: string;
  num_integrantes :number | undefined;
  link_redes      :string | undefined;
  telefone        :string;
  descricao       :string | undefined;
  createdAt       :Date;
}

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface EntertainmentItem {
  name: string;
  image: string;
}

export interface ScheduleEvent {
  day: string;
  title: string;
  description: string;
}
