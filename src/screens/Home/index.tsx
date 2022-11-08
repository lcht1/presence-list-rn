import { useState } from "react";

import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    FlatList,
    Alert,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home() {
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState("");

    const handleParticipantAdd = () => {
        if (participants.includes(participantName)) {
            return Alert.alert(
                "Participante já existe!",
                "Adicione um participante com um nome diferente."
            );
        }
        setParticipants((prevState) => [...prevState, participantName]);
        setParticipantName("");
    };

    const handleParticipantRemove = (name: string) => {
        Alert.alert(
            "Excluir",
            `Deseja excluir o participante ${name} da lista?`,
            [
                {
                    text: "Sim",
                    onPress: () =>
                        setParticipants((prevState) => [
                            ...prevState.filter(
                                (participant) => participant !== name
                            ),
                        ]),
                },
                {
                    text: "Não",
                    style: "cancel",
                },
            ]
        );
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Eventos</Text>
            <Text style={styles.date}>
                Segunda-feira, 7 de novembro de 2022
            </Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6b6b6b"
                    value={participantName}
                    onChangeText={(text) => setParticipantName(text)}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleParticipantAdd}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={participants}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.emptyList}>
                        Adicione participantes a sua lista
                    </Text>
                )}
            />
        </View>
    );
}
