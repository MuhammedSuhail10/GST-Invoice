import Icon from '@/assets/icons';
import { useTheme } from '@/constants/theme';
import { hp, wp } from '@/helpers/common';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import {
    Modal,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

type SearchProps = {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    placeholder?: string;
    onFilterApply?: (dateFrom: string, dateTo: string) => void;
    filter?: boolean;
};

const Search: React.FC<SearchProps> = ({ searchQuery, setSearchQuery, placeholder = "Search by name/ invoice no...", onFilterApply, filter }) => {
    const theme = useTheme();
    const [text, setText] = useState(searchQuery);
    const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
    const [dateFrom, setDateFrom] = useState<Date | null>(null);
    const [dateTo, setDateTo] = useState<Date | null>(null);
    const [showFromPicker, setShowFromPicker] = useState(false);
    const [showToPicker, setShowToPicker] = useState(false);

    const handleApplyFilter = () => {
        if (onFilterApply) {
            const fromDateString = dateFrom ? dateFrom.toISOString().split('T')[0] : '';
            const toDateString = dateTo ? dateTo.toISOString().split('T')[0] : '';
            onFilterApply(fromDateString, toDateString);
        }
        setIsFilterModalVisible(false);
    };

    const handleClearFilter = () => {
        setDateFrom(null);
        setDateTo(null);
        if (onFilterApply) {
            onFilterApply('', '');
        }
    };

    const formatDate = (date: Date | null): string => {
        if (!date) return 'Select Date';
        return date.toLocaleDateString('en-GB');
    };

    const onFromDateChange = (event: any, selectedDate?: Date) => {
        if (Platform.OS === 'android') {
            setShowFromPicker(false);
        }
        if (selectedDate) {
            setDateFrom(selectedDate);
        }
    };

    const onToDateChange = (event: any, selectedDate?: Date) => {
        if (Platform.OS === 'android') {
            setShowToPicker(false);
        }
        if (selectedDate) {
            setDateTo(selectedDate);
        }
    };

    const styles = StyleSheet.create({
        searchContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 10,
            gap: 10,
            backgroundColor: theme.colors.primaryBg,
        },
        searchInputContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: hp(6),
            width: filter ? wp(78) : wp(90),
            borderWidth: 1,
            borderColor: theme.colors.secondaryBg,
            backgroundColor: theme.colors.primaryBg,
            paddingHorizontal: 10,
            borderRadius: theme.borderRadius.md,
        },
        searchInput: {
            width: '85%',
            height: '100%',
            color: theme.colors.text,
            fontFamily: 'Poppins',
            fontSize: 13,
        },
        filterContainer: {
            width: wp(12),
            backgroundColor: theme.colors.secondaryBg, height: '100%', display: 'flex', alignItems: 'center', flexDirection: 'row',
            borderRadius: theme.borderRadius.md,
            justifyContent: 'center',
        },
        modalOverlay: {
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'center',
            alignItems: 'center',
        },
        modalContainer: {
            backgroundColor: theme.colors.primaryBg,
            borderRadius: theme.borderRadius.lg,
            padding: 20,
            width: wp(90),
            maxWidth: 400,
        },
        modalTitle: {
            fontSize: 18,
            fontWeight: 'bold',
            color: theme.colors.text,
            fontFamily: 'Poppins',
        },
        dateInputContainer: {
            marginBottom: 15,
        },
        dateLabel: {
            fontSize: 14,
            color: theme.colors.text,
            marginBottom: 8,
            fontFamily: 'Poppins',
        },
        dateInput: {
            height: hp(5),
            borderWidth: 1,
            borderColor: theme.colors.secondaryBg,
            borderRadius: theme.borderRadius.md,
            paddingHorizontal: 12,
            color: theme.colors.text,
            fontFamily: 'Poppins',
            fontSize: 14,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
        },
        dateInputText: {
            color: theme.colors.text,
            fontFamily: 'Poppins',
            fontSize: 14,
            flex: 1,
        },
        dateInputPlaceholder: {
            color: theme.colors.text,
            opacity: 0.5,
            fontFamily: 'Poppins',
            fontSize: 14,
            flex: 1,
        },
        buttonContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        button: {
            flex: 1,
            height: hp(5),
            borderRadius: theme.borderRadius.md,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 5,
        },
        applyButton: {
            backgroundColor: theme.colors.primary || '#007AFF',
        },
        clearButton: {
            backgroundColor: theme.colors.secondaryBg,
        },
        cancelButton: {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: theme.colors.secondaryBg,
        },
        buttonText: {
            color: theme.colors.text,
            fontFamily: 'Poppins',
            fontSize: 14,
            fontWeight: '500',
        },
        applyButtonText: {
            color: '#FFFFFF',
            fontFamily: 'Poppins',
            fontSize: 14,
            fontWeight: '500',
        },
    });

    return (
        <>
            <View style={styles.searchContainer}>
                <View style={styles.searchInputContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder={placeholder}
                        placeholderTextColor={theme.colors.text}
                        value={text}
                        onChangeText={(text) => setText(text)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="search"
                        clearButtonMode="while-editing"
                    />
                    <Pressable onPress={() => setSearchQuery(text)}>
                        <Icon name="search" fill={theme.colors.text} size="24" />
                    </Pressable>
                </View>
                {filter &&
                    <TouchableOpacity activeOpacity={0.3} style={styles.filterContainer} onPress={() => setIsFilterModalVisible(true)}>
                        <Icon name="filter" fill={theme.colors.text} size="26" />
                    </TouchableOpacity>
                }
            </View>

            <Modal visible={isFilterModalVisible} transparent={true} animationType="fade" onRequestClose={() => setIsFilterModalVisible(false)}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15 }}>
                            <View>
                                <Text style={styles.modalTitle}>Filter</Text>
                            </View>
                            <TouchableOpacity style={{ padding: 2.5, borderRadius: theme.borderRadius.sm, backgroundColor: theme.colors.secondaryBg }} activeOpacity={0.3} onPress={() => setIsFilterModalVisible(false)}>
                                <Icon name="close" fill={theme.colors.text} size="24" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.dateInputContainer}>
                            <Text style={styles.dateLabel}>From Date</Text>
                            <TouchableOpacity
                                style={styles.dateInput}
                                onPress={() => setShowFromPicker(true)}
                            >
                                <Text style={dateFrom ? styles.dateInputText : styles.dateInputPlaceholder}>
                                    {formatDate(dateFrom)}
                                </Text>
                                <Icon name="calendar" fill={theme.colors.text} size="16" />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.dateInputContainer}>
                            <Text style={styles.dateLabel}>To Date</Text>
                            <TouchableOpacity
                                style={styles.dateInput}
                                onPress={() => setShowToPicker(true)}
                            >
                                <Text style={dateTo ? styles.dateInputText : styles.dateInputPlaceholder}>
                                    {formatDate(dateTo)}
                                </Text>
                                <Icon name="calendar" fill={theme.colors.text} size="16" />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.buttonContainer}>
                            {/* <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity> */}

                            <TouchableOpacity
                                style={[styles.button, styles.clearButton]}
                                onPress={handleClearFilter}
                            >
                                <Text style={styles.buttonText}>Clear</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.button, styles.applyButton]}
                                onPress={handleApplyFilter}
                            >
                                <Text style={styles.applyButtonText}>Apply</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {showFromPicker && (
                    <DateTimePicker
                        value={dateFrom || new Date()}
                        mode="date"
                        display={'spinner'}
                        onChange={onFromDateChange}
                        maximumDate={new Date()}
                    />
                )}

                {showToPicker && (
                    <DateTimePicker
                        value={dateTo || new Date()}
                        mode="date"
                        display={'spinner'}
                        onChange={onToDateChange}
                        maximumDate={new Date()}
                        minimumDate={dateFrom || undefined}
                    />
                )}
            </Modal >
        </>
    );
};

export default Search;