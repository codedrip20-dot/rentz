// src/services/tenant/tenantService.ts

import {
    createTenant,
    getTenant,
    getTenantByUserId,
    updateTenant,
} from "@/lib/firebase/tenant";

import {
    CreateTenantData,
    Tenant,
} from "@/types/tenantTypes";

/* ============================================================================
   Tenant Service Result
============================================================================ */

export interface TenantServiceResult {
    success: boolean;

    tenant: Tenant | null;

    message: string | null;
}

/* ============================================================================
   Tenant Service
============================================================================ */

class TenantService {
    /* ------------------------------------------------------------------------
       Create Tenant
    ------------------------------------------------------------------------ */

    public async createTenant(
        data: CreateTenantData
    ): Promise<TenantServiceResult> {
        try {
            const tenant =
                await createTenant(data);

            return {
                success: true,
                tenant,
                message: null,
            };
        } catch (error) {
            console.error(
                "Tenant Service Error:",
                error
            );

            return {
                success: false,
                tenant: null,
                message:
                    error instanceof Error
                        ? error.message
                        : "Failed to create tenant.",
            };
        }
    }

    /* ------------------------------------------------------------------------
       Get Tenant
    ------------------------------------------------------------------------ */

    public async getTenant(
        tenantId: string
    ): Promise<TenantServiceResult> {
        try {
            const tenant =
                await getTenant(tenantId);

            if (!tenant) {
                return {
                    success: false,
                    tenant: null,
                    message:
                        "Tenant not found.",
                };
            }

            return {
                success: true,
                tenant,
                message: null,
            };
        } catch (error) {
            console.error(
                "Tenant Service Error:",
                error
            );

            return {
                success: false,
                tenant: null,
                message:
                    error instanceof Error
                        ? error.message
                        : "Failed to fetch tenant.",
            };
        }
    }

    /* ------------------------------------------------------------------------
       Get Tenant By User Id
    ------------------------------------------------------------------------ */

    public async getTenantByUserId(
        userId: string
    ): Promise<TenantServiceResult> {
        try {
            const tenant =
                await getTenantByUserId(
                    userId
                );

            if (!tenant) {
                return {
                    success: false,
                    tenant: null,
                    message:
                        "Tenant not found.",
                };
            }

            return {
                success: true,
                tenant,
                message: null,
            };
        } catch (error) {
            console.error(
                "Tenant Service Error:",
                error
            );

            return {
                success: false,
                tenant: null,
                message:
                    error instanceof Error
                        ? error.message
                        : "Failed to fetch tenant.",
            };
        }
    }

    /* ------------------------------------------------------------------------
       Update Tenant
    ------------------------------------------------------------------------ */

    public async updateTenant(
        tenantId: string,
        updates: Partial<Tenant>
    ): Promise<TenantServiceResult> {
        try {
            await updateTenant(
                tenantId,
                updates
            );

            const tenant =
                await getTenant(tenantId);

            return {
                success: true,
                tenant,
                message: null,
            };
        } catch (error) {
            console.error(
                "Tenant Service Error:",
                error
            );

            return {
                success: false,
                tenant: null,
                message:
                    error instanceof Error
                        ? error.message
                        : "Failed to update tenant.",
            };
        }
    }
}

/* ============================================================================
   Export Singleton
============================================================================ */

export const tenantService =
    new TenantService();