import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importante para o template-driven form
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.html',
  standalone: true,
  imports: [FormsModule] // Adicione isso para usar ngModel
})
export class FormsComponent {
  private dataService = inject(DataService);

  // Objetos para vincular aos inputs
  reservationData = {
    nome_responsavel: '',
    email_contato: '',
    data_reserva: '',
    num_convidados: null,
    telefone: '',
    nome_aniversariante: ''
  };

  bandData = {
    nome_banda: '',
    nome_contato: '',
    email_banda: '',
    estilo_musical: '',
    num_integrantes: null,
    link_redes: '',
    telefone: '',
    descricao: ''
  };

  onSubmitReservation() {
    this.dataService.createReservation(this.reservationData).subscribe({
      next: (res) => {
        alert('Reserva enviada com sucesso!');
        this.resetReservationForm();
      },
      error: (err) => alert('Erro ao enviar reserva. Verifique os campos.')
    });
  }

  onSubmitBand() {
    this.dataService.registerBand(this.bandData).subscribe({
      next: (res) => {
        alert('Material da banda enviado com sucesso!');
        this.resetBandForm();
        // this.dataService.loadBands(); // Recarrega a lista de bandas na UI
      },
      error: (err) => alert('Erro ao cadastrar banda.')
    });
  }

  private resetReservationForm() {
    this.reservationData = { nome_responsavel: '', email_contato: '', data_reserva: '', num_convidados: null, telefone: '', nome_aniversariante: '' };
  }

  private resetBandForm() {
    this.bandData = { nome_banda: '', nome_contato: '', email_banda: '', estilo_musical: '', num_integrantes: null, link_redes: '', telefone: '', descricao: '' };
  }
}