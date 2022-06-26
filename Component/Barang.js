import React, { Component } from "react";
import { Text, View, TextInput } from "react-native"

class Barang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama: "",
            jumlah: ""
        }


        this.handleNama = (event) => {
            this.setState({ nama: event })
        }
        this.handleJumlah = (event) => {
            this.setState({ jumlah: event })
        }
    }


    render() {
        return (
            <View>
                <Text>TUGAS 2 REACT NATIVE</Text>
                <TextInput
                    value={this.state.nama}
                    placeholder="Masukkan Nama Barang"
                    onChangeText={(event) => {
                        this.setState({ nama: event })
                    }}
                />
                < TextInput
                    keyboardType="numeric"
                    value={this.state.jumlah}
                    placeholder="Masukkan Jumlah Barang"
                    onChangeText={this.handleJumlah}
                />
                <Text>{this.props.namabelanja}</Text>
                <Text>Nama Barang : {this.state.nama}</Text>
                <Text>Jumlah Barang : {this.state.jumlah}</Text>

            </View>
        )
    };
}

export default Barang; 