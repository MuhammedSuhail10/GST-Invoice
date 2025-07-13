import { useTheme } from '@/constants/theme';
import TokenService from '@/helpers/token';
import { createProduct } from '@/services/productService';
import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from './../assets/icons/index';

const AddProduct = () => {
    const theme = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        hsn_code: '',
        unit: '',
        price: ''
    });
    const [isUnitModalVisible, setIsUnitModalVisible] = useState(false);

    const unitOptions = [
        { label: 'Kilograms (kg)', value: 'kg' },
        { label: 'Pieces (pcs)', value: 'pieces' }
    ];

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleUnitSelect = (value: string) => {
        handleInputChange('unit', value);
        setIsUnitModalVisible(false);
    };

    const handleSubmit = async () => {
        if (!formData.name.trim()) {
            Alert.alert('Error', 'Product name is required');
            return;
        }
        if (!formData.hsn_code.trim()) {
            Alert.alert('Error', 'HSN code is required');
            return;
        }
        if (!formData.unit.trim()) {
            Alert.alert('Error', 'Unit is required');
            return;
        }
        if (!formData.price.trim()) {
            Alert.alert('Error', 'Price is required');
            return;
        }

        const priceValue = parseFloat(formData.price);
        if (isNaN(priceValue) || priceValue <= 0) {
            Alert.alert('Error', 'Please enter a valid price');
            return;
        }
        const productData = {
            name: formData.name.trim(),
            hsn_code: formData.hsn_code.trim(),
            unit: formData.unit.trim(),
            price: priceValue
        };

        const storedToken = await TokenService.getToken();
        if (!storedToken) router.replace('/login');
        const response = await createProduct(storedToken, productData)
        if (response.status != 201) {
            alert(response.message)
        }
        setFormData({
            name: '',
            hsn_code: '',
            unit: '',
            price: ''
        });
        Alert.alert('Success', 'Product added successfully!');
        router.back();
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.primaryBg,
            padding: 20,
        },
        title: {
            fontSize: 24,
            fontWeight: '600',
            color: theme.colors.primary,
            fontFamily: 'Poppins',
        },
        formContainer: {
            backgroundColor: theme.colors.secondaryBg,
            borderRadius: theme.borderRadius.md,
            padding: 20,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: theme.borderRadius.md,
            elevation: 3,
        },
        inputGroup: {
            marginBottom: 20,
        },
        label: {
            fontSize: 16,
            fontWeight: '500',
            color: theme.colors.text,
            fontFamily: 'Poppins',
            marginBottom: 8,
        },
        input: {
            backgroundColor: theme.colors.primaryBg,
            borderRadius: theme.borderRadius.sm,
            padding: 12,
            fontSize: 16,
            color: theme.colors.text,
            fontFamily: 'Poppins',
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.1)',
        },
        inputFocused: {
            borderColor: theme.colors.primary,
            borderWidth: 2,
        },
        selectButton: {
            backgroundColor: theme.colors.primaryBg,
            borderRadius: theme.borderRadius.sm,
            padding: 12,
            fontSize: 16,
            color: theme.colors.text,
            fontFamily: 'Poppins',
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.1)',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        selectButtonText: {
            fontSize: 16,
            color: theme.colors.text,
            fontFamily: 'Poppins',
        },
        selectPlaceholder: {
            fontSize: 16,
            color: theme.colors.text + '80',
            fontFamily: 'Poppins',
        },
        modalOverlay: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
        },
        modalContent: {
            backgroundColor: theme.colors.secondaryBg,
            borderRadius: theme.borderRadius.md,
            padding: 20,
            width: '80%',
            maxHeight: '50%',
        },
        modalTitle: {
            fontSize: 18,
            fontWeight: '600',
            color: theme.colors.text,
            fontFamily: 'Poppins',
            marginBottom: 15,
            textAlign: 'center',
        },
        optionItem: {
            padding: 15,
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(0,0,0,0.1)',
        },
        optionText: {
            fontSize: 16,
            color: theme.colors.text,
            fontFamily: 'Poppins',
        },
        closeButton: {
            backgroundColor: theme.colors.primary,
            padding: 10,
            borderRadius: theme.borderRadius.sm,
            alignItems: 'center',
            marginTop: 15,
        },
        closeButtonText: {
            color: theme.colors.primaryBg,
            fontSize: 16,
            fontWeight: '500',
            fontFamily: 'Poppins',
        },
        submitButton: {
            backgroundColor: theme.colors.primary,
            padding: 15,
            borderRadius: theme.borderRadius.md,
            alignItems: 'center',
            marginTop: 20,
        },
        submitButtonText: {
            color: theme.colors.primaryBg,
            fontSize: 18,
            fontWeight: '600',
            fontFamily: 'Poppins',
        },
        resetButton: {
            backgroundColor: 'transparent',
            padding: 15,
            borderRadius: theme.borderRadius.md,
            alignItems: 'center',
            marginTop: 10,
            borderWidth: 1,
            borderColor: theme.colors.primary,
        },
        resetButtonText: {
            color: theme.colors.primary,
            fontSize: 16,
            fontWeight: '500',
            fontFamily: 'Poppins',
        },
    });

    const getSelectedUnitLabel = () => {
        const selectedOption = unitOptions.find(option => option.value === formData.unit);
        return selectedOption ? selectedOption.label : 'Select unit';
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center', marginBottom: 30 }}>
                <Link href="../" asChild>
                    <TouchableOpacity>
                        <Icon name='back' />
                    </TouchableOpacity>
                </Link>
                <Text style={styles.title}>Add New Product</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Product Name </Text>
                    <TextInput
                        style={styles.input}
                        value={formData.name}
                        onChangeText={(value) => handleInputChange('name', value)}
                        placeholder="Enter product name"
                        placeholderTextColor={theme.colors.text + '80'}
                    />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>HSN Code </Text>
                    <TextInput
                        style={styles.input}
                        value={formData.hsn_code}
                        onChangeText={(value) => handleInputChange('hsn_code', value)}
                        placeholder="Enter HSN code"
                        placeholderTextColor={theme.colors.text + '80'}
                    />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Unit </Text>
                    <TouchableOpacity 
                        style={styles.selectButton} 
                        onPress={() => setIsUnitModalVisible(true)}
                    >
                        <Text style={formData.unit ? styles.selectButtonText : styles.selectPlaceholder}>{getSelectedUnitLabel()}</Text>
                        {/* <Icon name='dropdown' /> */}
                    </TouchableOpacity>
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Price (₹) </Text>
                    <TextInput
                        style={styles.input}
                        value={formData.price}
                        onChangeText={(value) => handleInputChange('price', value)}
                        placeholder="Enter price"
                        placeholderTextColor={theme.colors.text + '80'}
                        keyboardType="decimal-pad"
                    />
                </View>
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Add Product</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.resetButton}
                    onPress={() => setFormData({ name: '', hsn_code: '', unit: '', price: '' })}
                >
                    <Text style={styles.resetButtonText}>Reset Form</Text>
                </TouchableOpacity>
            </View>

            <Modal
                visible={isUnitModalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setIsUnitModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Select Unit</Text>
                        <FlatList
                            data={unitOptions}
                            keyExtractor={(item) => item.value}
                            renderItem={({ item }) => (
                                <TouchableOpacity 
                                    style={styles.optionItem}
                                    onPress={() => handleUnitSelect(item.value)}
                                >
                                    <Text style={styles.optionText}>{item.label}</Text>
                                </TouchableOpacity>
                            )}
                        />
                        <TouchableOpacity 
                            style={styles.closeButton}
                            onPress={() => setIsUnitModalVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default AddProduct;