import { Heading } from "@/components/ui/heading";
import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { Card } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import BackButton from "@/components/ui/backbtn";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const router = useRouter();
  const imageItem = () => {
    return (
      <View style={styles.profileImageContainer} className="mt-4">
        <Image
          source={require("@/assets/images/user.png")}
          alt="user"
          className="w-24 h-24 rounded-full"
        />
      </View>
    );
  };

  const PersonalInfoCard = () => {
    return (
      <View className="mx-4 mb-6">
        {/* Banner Header */}
        <View className="bg-blue-500 p-4 rounded-t-xl flex-row items-center justify-between">
          <Text className="text-xl font-semibold text-white">
            Thông tin cá nhân
          </Text>
        </View>

        {/* Content Group */}
        <View className="bg-white rounded-b-xl p-4 shadow-md">
          <View className="space-y-3">
            {/* Identity Group */}
            <View className="mb-4">
              <Text className="text-sm text-gray-400 mb-2">
                Thông tin định danh
              </Text>
              <View style={styles.infoRow}>
                <Text className="text-base text-gray-600">CCCD:</Text>
                <Text className="text-base font-semibold">12654321</Text>
              </View>
              <View style={styles.infoRow}>
                <Text className="text-base text-gray-600">Họ tên:</Text>
                <Text className="text-base font-semibold">Nguyễn Văn A</Text>
              </View>
            </View>

            {/* Personal Details Group */}
            <View>
              <Text className="text-sm text-gray-400 mb-2">
                Thông tin chi tiết
              </Text>
              <View style={styles.infoRow}>
                <Text className="text-base text-gray-600">Giới tính:</Text>
                <Text className="text-base font-semibold">Nam</Text>
              </View>
              <View style={styles.infoRow}>
                <Text className="text-base text-gray-600">Ngày sinh:</Text>
                <Text className="text-base font-semibold">12/12/2000</Text>
              </View>
              <View style={styles.infoRow}>
                <Text className="text-base text-gray-600">Nhóm máu:</Text>
                <Text className="text-base font-semibold">-</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const InfoItem = () => {
    return (
      <View className="mx-4 mb-6">
        {/* Banner Header */}
        <View className="bg-blue-500 p-4 rounded-t-xl flex-row items-center justify-between">
          <Text className="text-xl font-semibold text-white">
            Thông tin liên hệ
          </Text>
        </View>

        {/* Content Group */}
        <View className="bg-white rounded-b-xl p-4 shadow-md">
          <View className="space-y-3">
            <View style={styles.infoRow}>
              <Text className="text-base text-gray-600">Địa chỉ:</Text>
              <Text className="text-base font-semibold">
                123 Đường ABC, Quận 1, TP.HCM
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Text className="text-base text-gray-600">Email:</Text>
              <Text className="text-base font-semibold">
                nguyenvana@gmail.com
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Text className="text-base text-gray-600">Số điện thoại:</Text>
              <Text className="text-base font-semibold">0987654321</Text>
            </View>
            <View style={styles.infoRow}>
              <Text className="text-base text-gray-600">Nghề nghiệp:</Text>
              <Text className="text-base font-semibold">Công an</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header với nút Back */}
      <View className="p-4 flex-row items-center">
        <BackButton />
        <Heading className="ml-4 text-lg font-semibold">
          Thông tin cá nhân
        </Heading>
      </View>
      {/* Nội dung */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {imageItem()}
        {PersonalInfoCard()}
        {InfoItem()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 20,
  },
  profileImageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
});
