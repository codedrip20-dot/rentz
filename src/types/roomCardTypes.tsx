import { Property } from "./property";
import { Room } from "./roomTypes";

/* ==========================================================
   Room Card Props
========================================================== */

export interface RoomCardProps {
  room: Room;
  property: Pick<Property, "propertyType" | "location">;
}

/* ==========================================================
   Room Card Action Button
========================================================== */

export interface ActionButtonProps {
  href: string;
  label?: string;
}

/* ==========================================================
   Room Card Badge
========================================================== */

export interface BadgeProps {
  label: string;
  variant?:
    | "success"
    | "warning"
    | "danger"
    | "primary"
    | "secondary";
}

/* ==========================================================
   Room Card Amenity Chip
========================================================== */

export interface AmenityChipProps {
  label: string;
}

/* ==========================================================
   Room Card Info Row
========================================================== */

export interface InfoRowProps {
  icon: React.ReactNode;
  text: string;
}

/* ==========================================================
   Room Card Image
========================================================== */

export interface RoomImageProps {
  imageUrl: string;
  roomName: string;
  availableNow: boolean;
}

/* ==========================================================
   Room Card Price
========================================================== */

export interface PriceSectionProps {
  rent: number;
  billingType: string;
}

/* ==========================================================
   Room Card Location
========================================================== */

export interface LocationSectionProps {
  city: string;
  state: string;
}

/* ==========================================================
   Room Card Amenities
========================================================== */

export interface AmenitiesSectionProps {
  amenities: string[];
}

/* ==========================================================
   Room Card Status
========================================================== */

export interface StatusBadgeProps {
  status: Room["status"];
}