import {
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";

import { useProperties } from "./useProperties";

import { getRoomsByPropertyId } from "@/lib/firebase/room";
import { Room } from "@/types/roomTypes";

const usePropertyDashboard = () => {
    const {
        properties,
        loading: propertiesLoading,
        error: propertiesError,
    } = useProperties();

    const [rooms, setRooms] = useState<Room[]>([]);

    const [selectedPropertyId, setSelectedPropertyId] =
        useState<string | null>(null);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState<string | null>(null);

    const activePropertyId = useMemo(() => {
        if (selectedPropertyId) {
            return selectedPropertyId;
        }

        return properties[0]?.id ?? null;
    }, [selectedPropertyId, properties]);

    const refreshRooms = useCallback(async () => {
        if (!activePropertyId) {
            setRooms([]);
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const fetchedRooms =
                await getRoomsByPropertyId(activePropertyId);

            setRooms(fetchedRooms);
        } catch (err) {
            console.error(err);

            setRooms([]);

            setError("Failed to fetch rooms.");
        } finally {
            setLoading(false);
        }
    }, [activePropertyId]);

    useEffect(() => {
        refreshRooms();
    }, [refreshRooms]);

    return {
        properties,

        rooms,

        selectedPropertyId: activePropertyId,

        setSelectedPropertyId,

        loading: loading || propertiesLoading,

        error: error || propertiesError,

        refreshRooms,
    };
};

export default usePropertyDashboard;