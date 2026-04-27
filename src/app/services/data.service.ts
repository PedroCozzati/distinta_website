import { Injectable, signal, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Band, EntertainmentItem, MenuItem, ScheduleEvent, ScheduleItem } from '../models/data.models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private http = inject(HttpClient);
  private readonly API_URL = 'http://localhost:3000/api';

  // Sinais para os dados da API

  constructor() {
    // this.loadBands();
  }

  // loadBands() {
  //   this.http.get<Band[]>(`${this.API_URL}/bands`).subscribe({
  //     next: (data) => this.bands.set(data),
  //     error: (err) => console.error('Erro ao carregar bandas:', err)
  //   });
  // }

  // POST: Enviar reserva de aniversário
  createReservation(reservation: any) {
    return this.http.post(`${this.API_URL}/reservations`, reservation);
  }

  // POST: Registrar nova banda (para o formulário de cadastro)
  registerBand(bandData: any) {
    return this.http.post(`${this.API_URL}/bands`, bandData);
  }

  readonly scheduleItems = signal<ScheduleItem[]>([
    {
      title: 'KARAOKÊ',
      subtitle: 'QUINTA • 18:00',
      day: 'QUINTA',
      time: '18:00',
      image: 'https://media.istockphoto.com/id/2189038556/pt/foto/multicultural-couple-enjoying-a-romantic-night-of-karaoke-in-a-lively-bar-setting.jpg?s=612x612&w=0&k=20&c=PMKKEuXSvFlXfgHi4TJeJmzZCF0XZeV0mv-3yneUamY='
    },
    {
      title: 'MPB',
      subtitle: 'SEXTA • 18:00',
      day: 'SEXTA',
      time: '18:00',
      image: 'https://img.freepik.com/fotos-premium/feche-as-maos-jovem-tocando-violao-no-palco-ao-vivo-em-concerto-com-luz-neon-jovem-praticando-musica-e-violao-solo-no-show_208349-2266.jpg'
    },
    {
      title: 'GARAGE TRIBUTE',
      subtitle: 'SÁBADO • 18:00',
      day: 'SÁBADO',
      time: '18:00',
      image: 'https://c.pxhere.com/photos/35/a9/music_festival_canon_concert_live_gig_band_f_te-98708.jpg!d'
    },
    {
      title: 'JAM SESSION',
      subtitle: 'DOMINGO • 18:00',
      day: 'DOMINGO',
      time: '18:00',
      image: 'https://img.freepik.com/fotos-gratis/guitarrista-de-banda-de-musica-executando-repeticao-em-estudio-de-gravacao_53876-133523.jpg?semt=ais_hybrid&w=740&q=80'
    }
  ]);

  readonly bands = signal<Band[]>([
    {
      nome_banda: 'Guns N\' Roses',
      descricao: 'Ícones do Hard Rock mundial, conhecidos por clássicos como Sweet Child O\' Mine e Welcome to the Jungle.',
      estilo_musical: 'Hard Rock',
      image_url: 'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2021/02/guns-n-roses.jpg',
      link_redes: 'https://www.instagram.com/gunsnroses?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      nome_contato: 'Axl Rose',
      email_banda: '',
      num_integrantes: 6,
      telefone: '',
      createdAt: new Date(),
      id: 1
    },
    {
      nome_banda: 'The Cure',
      descricao: 'Liderada por Robert Smith, a banda é o maior expoente do Post-Punk e Rock Gótico internacional.',
      estilo_musical: 'Gótico / Post-Punk',
      image_url: 'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2023/06/the-cure-banda.jpg',
      link_redes: 'https://www.instagram.com/thecure?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      nome_contato: 'Axl Rose',
      email_banda: '',
      num_integrantes: 6,
      telefone: '',
      createdAt: new Date(),
      id: 1
    },
    {
      nome_banda: 'Alice in Chains',
      descricao: 'Diretamente de Seattle, uma das bandas mais pesadas e sombrias do Grunge, famosa pelas harmonias vocais únicas de Layne Staley e Jerry Cantrell.',
      estilo_musical: 'Grunge / Sludge Metal',
      image_url: 'https://static.wixstatic.com/media/607c45_67a929f8f0c442a19cbd818ffcdcbf42~mv2.jpg/v1/fill/w_568,h_378,al_c,lg_1,q_80,enc_avif,quality_auto/607c45_67a929f8f0c442a19cbd818ffcdcbf42~mv2.jpg',
      link_redes: 'https://www.instagram.com/aliceinchains?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      nome_contato: 'Axl Rose',
      email_banda: '',
      num_integrantes: 6,
      telefone: '',
      createdAt: new Date(),
      id: 1
    }
  ]);

  readonly menuItems = signal<MenuItem[]>([
    {
      name: 'BONNEVILLE',
      description: 'Pão de brioche, hambúrguer premium (blend artesanal de costela exclusivo 150g), bacon, alface americana, queijo cheddar, tomates selecionados e maionese verde especial da casa.',
      price: 'R$ 35,00',
      image: 'https://firebasestorage.googleapis.com/v0/b/sistema-eficiente.appspot.com/o/arquivos%2FoNPUkFCK0iZzuClY8HAyHT8zNaK2%2Ffotos%2Fitens%2F1e057350c0924a8ebbf2a76f8c224c33.jpg?alt=media'
    },
    {
      name: 'V-MAX',
      description: 'Pão de brioche, hambúrguer premium (blend artesanal de costela exclusivo 150g ou blend de fraldinha), molho de cheddar, farofa de bacon premium, cebola caramelizada e picles selecionados.',
      price: 'R$ 35,00',
      image: 'https://firebasestorage.googleapis.com/v0/b/sistema-eficiente.appspot.com/o/arquivos%2FoNPUkFCK0iZzuClY8HAyHT8zNaK2%2Ffotos%2Fitens%2Fa33529c72ae54be1b6744329b8538c04.jpg?alt=media'
    },
    {
      name: 'SIDECAR',
      description: 'Pão de brioche, 2 hambúrgueres premium (150g cada – blend artesanal de costela exclusivo ou blend de fraldinha), alface, tomate, queijo prato e maionese especial.',
      price: 'R$ 36,70',
      image: 'https://firebasestorage.googleapis.com/v0/b/sistema-eficiente.appspot.com/o/arquivos%2FoNPUkFCK0iZzuClY8HAyHT8zNaK2%2Ffotos%2Fitens%2F51987bf3a5374deaa736177d9cf0fb7e.jpg?alt=media'
    }
  ]);

  readonly entertainmentItems = signal<EntertainmentItem[]>([
    { name: 'Sinuca', image: 'https://t4.ftcdn.net/jpg/11/98/47/93/360_F_1198479394_SycX0FWA1LyXt7eALaFivxIP7Z0cs7Xm.jpg' },
    { name: 'Dardos', image: 'https://media.istockphoto.com/id/168718452/pt/foto/dardos-no-alvo.jpg?s=612x612&w=0&k=20&c=JR6Z5nr6Q6mic01eQxswPUdTy4CmOqy7KQ-a1hL1U_w=' },
    { name: 'Pebolim', image: 'https://images.unsplash.com/photo-1757889693437-30a0290c4dcf?w=500&auto=format&fit=crop&q=60' },
    { name: 'Dominó', image: 'https://c.pxhere.com/photos/eb/28/background_black_white_block_conceptual_dependence_dependent_domino-1349772.jpg!d' },
    { name: 'Cartas', image: 'https://cdn.pixabay.com/photo/2025/01/09/16/33/playing-cards-9322164_1280.jpg' }
  ]);
  
  readonly aboutImages = signal<string[]>([
    'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600',
    'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=600',
    'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600',
    'https://images.unsplash.com/photo-1574096079513-d8259312b785?w=600',
    'https://images.unsplash.com/photo-1560624056-44c178385ca3?w=600',
    'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=600'
  ]);
  
  readonly scheduleEvents = signal<ScheduleEvent[]>([
    { day: 'Quintas', title: 'KARAOKÊ', description: 'Suba e solte a voz. Temos microfones, monitores e o melhor setlist de rock para você brilhar.' },
    { day: 'Domingos', title: 'JAM SESSION', description: 'Não precisa trazer instrumento! Temos tudo por aqui pra você tocar e cantar com a galera.' }
  ]);
}
