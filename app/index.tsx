import CheckoutButton from "@/components/checkout/CheckoutButton";
import PriceTag from "@/components/checkout/PriceTag";
import Card from "@/components/containers/Card/Card";
import BodyCard from "@/components/containers/Card/BodyCard";
import Scrollable from "@/components/containers/Scrollable";
import HeaderHidden from "@/components/headers/HeaderHidden";
import HeaderWithTitle from "@/components/headers/HeaderWithTitle";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import FooterCard from "@/components/containers/Card/FooterCard";

/**
 * index: carrinho produtos
 * checkout: total, meio de pagamento
 * compra concluída
 */

export default function index() {
  const handleCheckout = () => {
    router.push("/checkout");
  };

  const [cupom, onChangeCupom] = useState("");

  return (
    <Scrollable>
      <HeaderWithTitle title="Shopping Cart" />

      <Card title="Choice Oficial">

        <BodyCard> 
          <Image style={styles.image} source={require('../assets/images/sata.webp')} />
          <Card title="Adaptador SATA Para USB 3.0 6 Gbps">
            <Text>Variaçao: Sata para USB3.0</Text>
            <View style={styles.qtd}>
              <PriceTag price={19.60} />
              <Text>1x</Text>
            </View>
          </Card>
        </BodyCard>
        
        <FooterCard>
          <Text>Cupons da Loja</Text>
          <TextInput style={styles.input} value={cupom} onChangeText={onChangeCupom} placeholder="Insira seu cupom aqui" placeholderTextColor='black'></TextInput>
        </FooterCard>
      </Card>

      <CheckoutButton onPress={handleCheckout} />
    </Scrollable>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  input: {
    color: 'black',
  },
  qtd: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
