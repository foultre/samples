package corda.tokenSDK.samples.states;

import com.google.common.collect.ImmutableList;
import com.r3.corda.lib.tokens.contracts.states.EvolvableTokenType;
import com.r3.corda.lib.tokens.contracts.types.TokenPointer;
import corda.tokenSDK.samples.contracts.HouseContract;
import net.corda.core.contracts.Amount;
import net.corda.core.contracts.BelongsToContract;
import net.corda.core.contracts.LinearPointer;
import net.corda.core.contracts.UniqueIdentifier;
import net.corda.core.identity.Party;
import org.jetbrains.annotations.NotNull;

import java.util.Currency;
import java.util.List;

@BelongsToContract(HouseContract.class)
public class HouseState extends EvolvableTokenType {

    private final UniqueIdentifier linearId;
    private final List<Party> maintainers;
    private final int fractionDigits = 0;

    //Properties of House State
    private final Amount<Currency> valuation;
    private final int noOfBedRooms;
    private final String constructionArea;
    private final String additionInfo;
    private final String address;

    public HouseState(UniqueIdentifier linearId, List<Party> maintainers, Amount<Currency> valuation, int noOfBedRooms, String constructionArea, String additionInfo, String address) {
        this.linearId = linearId;
        this.maintainers = maintainers;
        this.valuation = valuation;
        this.noOfBedRooms = noOfBedRooms;
        this.constructionArea = constructionArea;
        this.additionInfo = additionInfo;
        this.address = address;
    }

    @NotNull
    @Override
    public UniqueIdentifier getLinearId() {
        return linearId;
    }

    public int getNoOfBedRooms() {
        return noOfBedRooms;
    }

    public String getConstructionArea() {
        return constructionArea;
    }

    public String getAdditionInfo() {
        return additionInfo;
    }

    public String getAddress() {
        return address;
    }

    public Amount<Currency> getValuation() {
        return valuation;
    }

    @Override
    public int getFractionDigits() {
        return fractionDigits;
    }

    @NotNull
    @Override
    public List<Party> getMaintainers() {
        return ImmutableList.copyOf(maintainers);
    }

    public TokenPointer<HouseState> toPointer(){
        LinearPointer<HouseState> linearPointer = new LinearPointer<>(linearId, HouseState.class);
        return new TokenPointer<>(linearPointer, fractionDigits);
    }
}