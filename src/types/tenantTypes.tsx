// src/types/tenantTypes.ts

export interface Tenant {
  tenantId: string;
  userId: string;

  // Personal Information
  officialName: string;
  phoneNumber: string;
  email: string;

  // Booking Information
  bookingId: string;
  roomId: string;
  propertyId: string;
  ownerId: string;

  // Financial Information
  monthlyRent: number;
  securityDeposit: number;

  // Stay Information
  moveInDate: Date;
  moveOutDate?: Date;

  // Status
  status: TenantStatus;

  // Metadata
  createdAt: Date;
  updatedAt: Date;
}

export interface TenantRegistrationData {
  officialName: string;
  phoneNumber: string;
}

export interface CreateTenantData {
  userId: string;
  bookingId: string;
  roomId: string;
  propertyId: string;
  ownerId: string;
  tenantId: string;

  officialName: string;
  phoneNumber: string;
  email: string;

  monthlyRent: number;
  securityDeposit: number;

  moveInDate: Date;
  profileClaimed?:boolean
}

export type TenantStatus =
  | "active"
  | "inactive"
  | "vacated"
  | "pending";

export interface TenantSummary {
  tenantId: string;
  officialName: string;
  roomId: string;
  propertyId: string;
  status: TenantStatus;
}