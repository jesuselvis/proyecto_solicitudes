<template>
    <div >
    <q-layout class="login-container">
      <q-page-container>
        <q-card class="login-card">
          <q-card-section>
            <div class="login-logo">
              <img src="~assets/quasar-logo-vertical.svg" alt="Logo" />
            </div>
            <q-form @submit="login" class="q-gutter-md">
              <q-input
                v-model="email"
                label="Correo electrónico"
                filled
                standout
                dense
              />
              <q-input
                v-model="password"
                label="Contraseña"
                type="password"
                filled
                standout
                dense
              />
              <q-btn
                type="submit"
                label="Iniciar sesión"
                color="primary"
                class="login-btn q-mt-md"
                push
              />
            </q-form>
            <div class="login-options">
              <q-checkbox v-model="rememberMe" label="Recuérdame" />
              <q-link class="q-md-2 login-forgot" to="/forgot-password">
                 ¿Olvidaste tu contraseña?
              </q-link>
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn
              flat
              color="primary"
              label="Registrarse"
              to="/register"
            />
          </q-card-actions>
        </q-card>
      </q-page-container>
    </q-layout>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        rememberMe: false
      };
    },
    methods: {
      login() {
        // Implementa la lógica de inicio de sesión aquí
        console.log('Iniciando sesión con', this.email, this.password);
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  
  .login-card {
    max-width: 350px;
    width: 100%;
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .login-logo img {
    width: 100px;
    height: 100px;
    margin: 0 auto 15px;
  }
  
  .login-title {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
  
  .login-btn {
    width: 100%;
  }
  
  .login-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
  }
  
  .login-forgot {
    color: var(--q-color-primary);
    text-decoration: none;
  }
  
  .login-card q-checkbox {
    color: var(--q-color-primary);
  }
  
  .login-card q-link {
    font-size: 0.85rem;
  }
  
  .login-card q-btn {
    margin-top: 15px;
  }
  
  /* Personaliza los estilos adicionales aquí */
  </style>
  