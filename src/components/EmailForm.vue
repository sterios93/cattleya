<template>
    <div class="d-flex align-items-center flex-column container my-5">
        <h1 class="heading">Свържете се с нас</h1>
        <form class="col-10 col-sm-8" @submit.prevent="submit">
            <p v-if="success">Запитването ви бе успешно изпратено.</p>
            <p v-if="resError" class="redcolor">Възникна грешка, моля опитайте отново.</p>

            <div v-if="errors.length">
                <b>Моля въведете правилно, следните полета :</b>
                <ul>
                    <li class="redcolor" v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
            </div>

            <div class="form-row">
                <label for="name" class="goldColor">Име :</label>
                <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Вашето име"
                    name="name"
                    v-model="name"
                    >
            </div>
            <div class="form-row mt-2">
                <label for="mobilePhone" class="goldColor">Телефон :</label>
                <input
                    type="tel"
                    class="form-control"
                    id="mobilePhone"
                    placeholder="Вашият телефон"
                    name="phone"
                    v-model="phone"
                    >
            </div>
            <div class="form-row mt-2">
                <label for="emailField" class="goldColor">Имейл адрес :</label>
                <input
                    type="email"
                    class="form-control"
                    id="emailField"
                    placeholder="Имейл адрес"
                    name="email"
                    v-model="email"
                    >
            </div>
            <div class="form-group mt-2">
                <label for="messageField" class="goldColor">Съобщение :</label>
                <textarea
                    class="form-control"
                    id="messageField"
                    rows="4"
                    placeholder="Вашето съобщение"
                    name="msg"
                    v-model="msg"
                    ></textarea>
            </div>
        <div class="form-group">
            <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    id="acceptGdpr"
                    v-model="gdpr"
                    name="gdpr"
                    >
                <label class="form-check-label" for="acceptGdpr">
                    Съгласявам се, контактите ми да бъдат използвани за обратна връзка.
                </label>
            </div>
        </div>
        <button type="submit" id='submitButton' class="btn customButtons col">Изпрати</button>
</form>
    </div>
</template>

<script>
/* eslint-disable guard-for-in,no-restricted-syntax,consistent-return,no-undef */

import axios from 'axios';

export default {
  name: 'Email-form',
  data() {
    return {
      name: null,
      phone: null,
      email: null,
      msg: null,
      gdpr: null,
      errors: [],
      success: false,
      resError: false,
    };
  },
  methods: {
    submit() {
      this.checkForm();
      if (this.checkForm()) {
        const payload = {
          name: this.name,
          phone: this.phone,
          email: this.email,
          msg: this.msg,
          gdpr: this.gdpr,
        };
        const dataForm = new FormData();

        for (const key in payload) {
          dataForm.append(key, payload[key]);
        }

        axios.post('http://cattleyaresidence.com/form.php', dataForm)
          .then((res) => {
            if (res.data.status && res.data.status === '200') {
              this.name = '';
              this.phone = '';
              this.email = '';
              this.msg = '';
              this.gdpr = '';
              this.success = true;
              ga('send', 'event', 'Lead', 'Submit', 'Form');
              fbq('track', 'Lead');
            } else {
              this.resError = true;
            }
          });
      }
    },
    checkForm() {
      this.errors = [];

      if (!this.name) {
        this.errors.push('Моля въведете вашето име.');
      }

      if (!this.email) {
        this.errors.push('Моля въведете вашият имейл адрес.');
      }

      if (this.phone && this.phone.length < 10) {
        this.errors.push('Моля въведете валиден мобилен телефон.');
      }

      if (!this.msg) {
        this.errors.push('Моля въведете вашето съобщение.');
      }

      if (!this.gdpr) {
        this.errors.push('Моля приемете условията за ползване.');
      }

      if (!this.errors.length) {
        return true;
      }
    },
  },
  destroyed() {
    this.success = false;
    this.resError = false;
  },
};
</script>


<style scoped lang="stylus">
    .heading
        color: #9C806B;
        font-weight bold
    .goldColor
        color: #9C806B
    .customButtons
        background #9c806b;
        border-radius: 5px;
        color: white;
    .form-control:focus
        border-color: #9C806B;
        outline: 0;
        -webkit-box-shadow: 0 0 0 0.2rem rgba(156, 128, 107, 0.3);
        box-shadow: 0 0 0 0.2rem rgba(156, 128, 107, 0.3);
    .redcolor
        color red
</style>
