import {IonButton,IonButtons,IonCard,IonCol,IonContent,IonGrid,IonHeader,IonIcon,IonItem,
IonMenuButton,IonPage,IonRow,IonTitle,IonToolbar,} from "@ionic/react";
import { close } from "fs";
import { Icon } from "ionicons/dist/types/components/icon/icon";
import { add, closeSharp, cloud, pencil } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import ExploreContainer from "../../components/ExploreContainer";
import { removeCostumer, saveCustomer, searchCustomers } from "./CustomerApi";

const CustomerList: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [clientes, setClientes] = useState<any>([]);
  const history = useHistory();

  useEffect(() => {
    search();
  }, []);

  const search = () => {
    let result = searchCustomers();
    setClientes(result);
  }

  const remove = (id: string) => {
    removeCostumer(id);
    search();
  }

  const pruebaLocalStorage = () => {
    const ejemplo = {
      firstname: "Leonardo",
      lastname: "Telis",
      email: "jdelossantostelis@gmail.com",
      phone: "7445883588",
      address: "puebla",
    };
    saveCustomer(ejemplo);
  }

  const addCustomer = () => {
    history.push('/page/customers/new');
  }

  const editCustomer = (id:String) => {
    history.push('/page/customers/' + id);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonCard>
          <IonTitle>Gestion de Clientes</IonTitle>

            <IonItem>
              <IonButton onClick={addCustomer} color="primary" fill="solid" slot="end" size="default">
                <IonIcon icon={add} />
                Agregar Clientes
              </IonButton>
            </IonItem>

            <IonGrid className="table">
              <IonRow>
                <IonCol>Nombre</IonCol>
                <IonCol>Email</IonCol>
                <IonCol>Telefono</IonCol>
                <IonCol>Direccion</IonCol>
                <IonCol>Acciones</IonCol>
              </IonRow>

              {clientes.map((cliente: any) => (
                <IonRow>
                  <IonCol>
                    {cliente.firstname} {cliente.lastname}
                  </IonCol>
                  <IonCol>{cliente.correo}</IonCol>
                  <IonCol>{cliente.phone}</IonCol>
                  <IonCol>{cliente.address}</IonCol>
                  <IonCol>

                    <IonButton  color="primary" fill="clear"
                    onClick={() => editCustomer(cliente.id) }>
                      <IonIcon icon={pencil} slot="icon-only" />
                    </IonButton>

                    <IonButton color="danger" fill="clear"
                    onClick={() => remove(cliente.id)}>
                      <IonIcon icon={closeSharp} slot="icon-only" />
                    </IonButton>
                  </IonCol>
                </IonRow>
              ))}
            </IonGrid>
          </IonCard>

          
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default CustomerList;
