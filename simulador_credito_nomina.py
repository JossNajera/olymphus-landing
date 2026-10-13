"""Simulador de credito de nomina con pagos mensuales fijos."""

from dataclasses import dataclass


@dataclass
class Pago:
    numero: int
    cuota: float
    interes: float
    capital: float
    saldo: float


def calcular_cuota(monto: float, tasa_anual: float, plazo_meses: int) -> float:
    """Calcula la cuota fija; tasa_anual se expresa como porcentaje nominal anual."""
    tasa_mensual = tasa_anual / 100 / 12
    if tasa_mensual == 0:
        return monto / plazo_meses
    return monto * tasa_mensual / (1 - (1 + tasa_mensual) ** -plazo_meses)


def generar_tabla(monto: float, tasa_anual: float, plazo_meses: int) -> list[Pago]:
    cuota_base = calcular_cuota(monto, tasa_anual, plazo_meses)
    tasa_mensual = tasa_anual / 100 / 12
    saldo = monto
    pagos = []

    for numero in range(1, plazo_meses + 1):
        interes = round(saldo * tasa_mensual, 2)
        capital = round(cuota_base - interes, 2)
        cuota = round(cuota_base, 2)

        if numero == plazo_meses or capital > saldo:
            capital = round(saldo, 2)
            cuota = round(capital + interes, 2)

        saldo = round(max(0, saldo - capital), 2)
        pagos.append(Pago(numero, cuota, interes, capital, saldo))

    return pagos


def pedir_numero(mensaje: str, minimo: float) -> float:
    while True:
        try:
            valor = float(input(mensaje).replace(",", "."))
            if valor >= minimo:
                return valor
        except ValueError:
            pass
        print(f"Ingresa un numero mayor o igual a {minimo}.")


def main() -> None:
    print("Simulador de credito de nomina")
    monto = pedir_numero("Monto del credito: $", 0.01)
    tasa_anual = pedir_numero("Tasa de interes anual (%): ", 0)
    plazo = int(pedir_numero("Plazo en meses: ", 1))

    pagos = generar_tabla(monto, tasa_anual, plazo)
    total_pagado = sum(pago.cuota for pago in pagos)
    total_intereses = sum(pago.interes for pago in pagos)

    print("\nResumen")
    print(f"Monto solicitado: ${monto:,.2f}")
    print(f"Tasa anual: {tasa_anual:.2f}%")
    print(f"Plazo: {plazo} meses")
    print(f"Cuota mensual aproximada: ${calcular_cuota(monto, tasa_anual, plazo):,.2f}")
    print(f"Total de intereses: ${total_intereses:,.2f}")
    print(f"Total a pagar: ${total_pagado:,.2f}")

    print("\nTabla de amortizacion")
    print(f"{'Mes':>4} {'Cuota':>12} {'Interes':>12} {'Capital':>12} {'Saldo':>12}")
    for pago in pagos:
        print(
            f"{pago.numero:>4} ${pago.cuota:>10,.2f} ${pago.interes:>10,.2f} "
            f"${pago.capital:>10,.2f} ${pago.saldo:>10,.2f}"
        )

    print("\nEstimacion informativa; no incluye comisiones, seguros ni otros cargos.")


if __name__ == "__main__":
    main()