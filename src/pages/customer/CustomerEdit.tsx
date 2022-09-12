import {IonButton,IonButtons,IonCard,IonCol,IonContent,IonGrid,IonHeader,IonIcon,IonInput,IonItem,
IonLabel,
IonMenuButton,IonPage,IonRow,IonTitle,IonToolbar,} from "@ionic/react";
import { close } from "fs";
import { Icon } from "ionicons/dist/types/components/icon/icon";
import { add, checkmark, closeSharp, cloud, pencil } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import ExploreContainer from "../../components/ExploreContainer";
import { removeCostumer, saveCustomer, searchCustomers } from "./CustomerApi";
    
    const CostumerEdit: React.FC = () => {
      const { name, id } = useParams<{ name: string; id: string; }>();

      const [customer, setCustomer] = useState<any>({});
      const history = useHistory();
    
      useEffect(() => {
        search();
      }, []);
    
      const search = () => {
        if (id !=='new'){
            let result = searchCustomerById(id);
            setCustomer(result);
        }
         }


      const save = () =>{
        customer.id = Math.round(Math.random() * 1000);
        saveCustomer(customer);
        history.push('/page/customers');
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
            <IonTitle>{id =='new' ? 'Agregar cliente' : 'Editar cliente'} </IonTitle>

        <IonRow>
            <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Nombre</IonLabel>
                    <IonInput onIonChange={e => customer.firstname = e.detail.value} 
                    value={customer.firstname}></IonInput>
                </IonItem>
            </IonCol>

        <IonCol>
            <IonItem>
                <IonLabel position="stacked">Apellido</IonLabel>
                <IonInput onIonChange={e => customer.lastname = e.detail.value} 
                    value={customer.lastname}></IonInput>
            </IonItem>
        </IonCol>
        </IonRow>

        <IonRow>
            <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Email</IonLabel>
                    <IonInput onIonChange={e => customer.email = e.detail.value} 
                    value={customer.email}></IonInput>
                </IonItem>
            </IonCol>

            <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Direccion</IonLabel>
                    <IonInput onIonChange={e => customer.address = e.detail.value} 
                    value={customer.address}></IonInput>
                </IonItem>
            </IonCol>
        </IonRow>

        <IonRow>
            <IonCol>
                <IonItem>
                    <IonLabel position="stacked">Telefono</IonLabel>
                    <IonInput onIonChange={e => customer.phone = e.detail.value} 
                    value={customer.phone}></IonInput>
                </IonItem>
            </IonCol>

            <IonCol>
            </IonCol>
        </IonRow>

            <IonItem>
                <IonButton onClick={save} color="success" fill="solid" slot="end" size="default">
                <IonIcon icon={checkmark} />
                Guardar
                </IonButton>
            </IonItem>

            
            </IonCard>

           
        </IonContent>
        </IonContent>
    </IonPage>
      );
    };
    
    export default CostumerEdit;
    