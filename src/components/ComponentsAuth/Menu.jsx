import React from "react";
import { Alert } from "react-native";
import { List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../../hooks/useAuth";

const Menu = () => {
  const navigation = useNavigation();
  const { logout } = useAuth();

  const logoutAccount = () => {
    Alert.alert(
      "Cerrar sesión",
      "¿Estas seguro de que quieres salir de tu cuenta?",
      [
        {
          text: "NO",
        },
        { text: "SI", onPress: logout },
      ],
      { cancelable: false }
    );
  };

  return (
    <>
      <List.Section>
        <List.Subheader>Mi cuenta</List.Subheader>
        <List.Item
          title="Cambiar nombre"
          description="Cambiar nombre de mi cuenta"
          left={(props) => <List.Icon {...props} icon="face" />}
          onPress={() => console.log("Cambiar nombre")}
        />
        <List.Item
          title="Cambiar email"
          description="Cambiar email de mi cuenta"
          left={(props) => <List.Icon {...props} icon="at" />}
          onPress={() => console.log("Cambiar email")}
        />
        <List.Item
          title="Cambiar Username"
          description="Cambiar nombre de usuario de mi cuenta"
          left={(props) => <List.Icon {...props} icon="sim" />}
          onPress={() => console.log("Cambiar username")}
        />
        <List.Item
          title="Cambiar Contraseña"
          description="Cambiar contraseña de mi cuenta"
          left={(props) => <List.Icon {...props} icon="key" />}
          onPress={() => console.log("Cambiar password")}
        />
        <List.Item
          title="Gestionar mis direcciones"
          description="Editar direcciones de mi cuenta"
          left={(props) => <List.Icon {...props} icon="map" />}
          onPress={() => console.log("Direcciones")}
        />
      </List.Section>
      <List.Section>
        <List.Subheader>App</List.Subheader>
        <List.Item
          title="Pedidos"
          description="Lista de mis Pedidos"
          left={(props) => <List.Icon {...props} icon="truck" />}
          onPress={() => console.log("Pedidos")}
        />
        <List.Item
          title="Favoritos"
          description="Lista de mis favoritos"
          left={(props) => <List.Icon {...props} icon="heart" />}
          onPress={() => navigation.navigate("favorites")}
        />
        <List.Item
          title="Cerrar Sesion"
          description="Cerrar Sesion de Usuario"
          left={(props) => <List.Icon {...props} icon="logout" />}
          onPress={logoutAccount}
        />
      </List.Section>
    </>
  );
};

export default Menu;
